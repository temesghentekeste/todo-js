const renderDeletedTask = (id) => {
  const UITaskCard = document.querySelector(`.card-${id}`);
  if (!UITaskCard) {
    return;
  }
  const UITaskColumn = UITaskCard.parentElement;
  UITaskColumn.remove();
};

export default renderDeletedTask;
