def whoIsNext(names, r):
  for i in range(0, r):
    names.extend([names[0], names[0]])
    del names[0]
  return names[0]