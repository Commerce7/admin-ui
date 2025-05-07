export const getFormItemIds = (
  id: string,
  hasDescription: boolean,
  hasErrorMessage: boolean
) => {
  let descriptionId = '';
  let describedById = '';
  const errorId = `${id}-error`;
  const labelId = `${id}-label`;

  if (hasDescription) {
    descriptionId = `${id}-description`;
    describedById = descriptionId;
  }

  if (hasErrorMessage) {
    describedById = errorId;
  }

  return { descriptionId, describedById, errorId, labelId };
};
