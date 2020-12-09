#include <algorithm>
#include <string>

class Pattern
{
public:
  static std::string pattern(int);
};

std::string Pattern::pattern(int n)
{
  std::string str = "";

  if (n < 1)
    return str;

  else
  {
    for (int i = n; i > 0; --i)
    {
      for (int j = n; j > (n - i); --j)
      {
        str += std::to_string(j);
      }
      str = str + "\n";
    }
  }

  str = str.substr(0, str.length() - 1);
  return str;
}
