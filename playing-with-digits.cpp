#include <iostream>
#include <math.h>

using namespace std;

class DigPow
{
public:
  static int digPow(int n, int p);
  static int digi_count(int num);
};

int DigPow::digPow(int n, int p)
{
  int digit;
  int sum = 0;
  int power = p;
  int number = n;
  digit = digi_count(n);
  int array[digit];
  
  for(int i = digit - 1; i >= 0; --i)
	{
		array[i] = number % 10;
		number /= 10;
	}
	for(int j = 0; j < digit; ++j)
	{
		array[j] = pow(array[j], power++);
	}
  for(int j = 0; j < digit; ++j)    
	{
		sum += array[j];
	}  
  for(int j = 0; j < digit; ++j)    
	{
		cout << array[j] << ", ";
	}
	cout << endl;

	for(int j = 0; j < digit; ++j)    
	{
		array[j] = 0;
	}
	if(sum % n == 0 || sum % n == 1 && sum > n)
		return sum/n;
	else
		return -1;
}

int DigPow::digi_count(int num)
{
	int count = 0;
  while(num > 0)
	{
		num = num/10;
		++count;
	}
	return count;
}
