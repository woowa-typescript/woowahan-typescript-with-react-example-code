function ReadOnlyRepository<T>(target: ObjectType<T> | EntitySchema<T> | string):
Repository<T> {
  return getConnection(“ro”).getRepository(target);
}
