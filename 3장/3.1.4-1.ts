function generateError(res: Response): never {
  throw new Error(res.getMessage());
}
