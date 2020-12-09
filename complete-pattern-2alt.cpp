class Pattern
{
public:
  static string pattern(int n)
  {
    stringstream pattern;
    for (int i = 1; i <= n; i++)
    {
      for (int j = n; j >= i; j--)
        pattern << j;
      if (i < n)
        pattern << endl;
    }
    return pattern.str();
  }
};
