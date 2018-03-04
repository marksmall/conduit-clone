import React from 'react';
import { compose, mapProps, withState } from 'recompose';
import * as R from 'ramda';
import Result from 'folktale/result';

const makePredicate = ([predFn, e]) => a =>
  predFn(a) ? Result.Ok(a) : Result.Error(e);
const makePredicates = R.map(makePredicate);
const runPredicates = ([input, validations]) =>
  R.map(predFn => predFn(input), makePredicates(validations));

const validate = R.map(R.compose(R.sequence(Result.of), runPredicates));
const makeValidationObject = R.mergeWithKey((k, l, r) => [l, r]);

const getErrors = R.compose(validate, makeValidationObject);

// const checkCanSubmit = compose(every(isEmpty), values);

export default (initialState, validationRules) => Component =>
  compose(
    withState('isSubmitting', 'setIsSubmitting', false),
    withState('state', 'updateState', R.assoc('errors', {}, initialState)),
    // withState('canSubmit', 'setCanSubmit', ({ state }) =>
    //   compose(checkCanSubmit, getErrors)(R.prop('form', state), validationRules)
    // ),
    mapProps(({ updateState, state, setCanSubmit, ...rest }) => ({
      onChange: R.curry((name, value) =>
        updateState(state => {
          const newState = R.assocPath(['form', name], value, state);
          const errors = R.map(
            ErrorComponent,
            getErrors(R.prop('form', newState), validationRules)
          );

          return R.assoc('errors', errors, newState);
        })
      ),
      submit: form => {
        rest.props.submit(form);
      },
      form: R.prop('form', state),
      errors: R.prop('errors', state),
      ...rest
    }))
  )(Component);

// Error Component
const ErrorComponent = result => {
  return result.matchWith({
    Ok: a => null,
    Error: errorMsg => <div className="error">{errorMsg.value}</div>
  });
};

// helper
export const getValue = R.path(['target', 'value']);

// validations
export const isNotEmpty = a => a.trim().length > 0;
export const hasCapitalLetter = a => /[A-Z]/.test(a);
export const isGreaterThan = R.curry((len, a) => a > len);
export const isLengthGreaterThan = len =>
  R.compose(isGreaterThan(len), R.prop('length'));
