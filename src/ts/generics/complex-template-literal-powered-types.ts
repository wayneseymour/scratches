type State = {
  modalOpen: boolean;
  confirmationDone: boolean;
};
type SetActions = `set${keyof State}`;
