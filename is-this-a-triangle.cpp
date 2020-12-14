#include <cmath>
namespace Triangle

{
  bool isTriangle(long a, long b, long c)
  { 
    if (a < 1 || b < 1 || c < 1)
      return 0;
  else
    return a + b > c && b + c > a && c+ a > b;
  }
};
