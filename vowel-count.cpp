#include <string>

using namespace std;

int getCount(const string& inputStr){
  int num_vowels = 0;
  for (int i = 0; inputStr[i] != '\0'; i++)
  {
    if (inputStr[i]=='a' || inputStr[i]=='e' || inputStr[i]=='i' ||
          inputStr[i]=='o' || inputStr[i]=='u' || inputStr[i]=='A' ||
          inputStr[i]=='E' || inputStr[i]=='I' || inputStr[i]=='O' ||
          inputStr[i]=='U')
    {
      ++num_vowels;
    }
  }
  
  return num_vowels;
}
