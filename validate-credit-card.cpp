class Kata {
  public:
  static bool validate(long long int n) {
    int sum = 0;
    int digit_count;
    digit_count = digi_count(n);
    
    int array[digit_count];

    for(int index = digit_count - 1; index >= 0; index--)
      {
        array[index] = n % 10;
          n = n/10;
      }

    for(int index = 0; index < digit_count; index += 2)
      {
         if (even_odd(digit_count)) //check the number is even or odd;
                array[index] += array[index]; 
        else
              array[index + 1] += array[index +1];
    
              
      }

    
    for(int index = 0; index < digit_count; index++)
      {
          if(array[index] > 9)
              {
                  array[index] -= 9;
              }
      }

    for(int index = 0; index < digit_count; index++)
      {
          sum += array[index];
      }
      
    if(sum % 10 == 0)
        return true;
    else
      return false;
    }

  static int digi_count(int check_num)
  { 
    int count = 0;
    
      while ( check_num >0)
        {
          check_num /= 10;
          count++;
        };
    return count;
    }

  static bool even_odd(int n)
  {
      if (n % 2 == 0) 
          return true;
      else
        return false;
  }
};