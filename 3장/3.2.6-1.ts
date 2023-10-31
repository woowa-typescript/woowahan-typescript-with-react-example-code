type Stage =
  | "init"
  | "select-image"
  | "edit-image"
  | "decorate-card"
  | "capture-image";
type StageName = `${Stage}-stage`;
// ‘init-stage’ | ‘select-image-stage’ | ‘edit-image-stage’ | ‘decorate-card-stage’ | ‘capture-image-stage’
