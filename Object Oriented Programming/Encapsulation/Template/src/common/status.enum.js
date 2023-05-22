// Use enums if there are a definite number of fixed values for any one variable.
// For example, a task's status can only be either NEW, IN_PROGRESS or DONE, nothing else!
// https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript/

/**
 * Enum for Task status values.
 * @see {@link https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript|What is an enum? }
 */
export const status = {
  TODO: 'Todo',
  IN_PROGRESS: 'In progress',
  DONE: 'Done'
};