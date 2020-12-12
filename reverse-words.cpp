#include <bits/stdc++.h> 
using namespace std; 

string reverse_words(string str)
{
  str.insert(str.end(), ' '); // Add a space to the end of last word so our algorithm detects it
  int n = str.length();
  int j = 0;

  for (int i = 0; i < n; i++)
  {
    if (str[i] == ' ') {
      reverse(str.begin() + j, str.begin() + i); 

      j = i + 1;
    }
  }

  str.pop_back(); // Remove added spaces
  return str;
}