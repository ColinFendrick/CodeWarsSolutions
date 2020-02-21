using System;

public class MaxDiffLength
{

    public static int Mxdiflg(string[] a1, string[] a2)
    {
        if (a1 == null || a1.Length == 0 || a2 == null || a2.Length == 0)
          return -1;

        int maxVal = int.MinValue;
        for (int i = 0; i < a1.Length; i++)
        {
          for (int j = 0; j < a2.Length; j++)
          {
            int diff = Math.Abs(a1[i].Length - a2[j].Length);
            if (diff > maxVal)
              maxVal = diff;
          }
        }

        return maxVal;
    }
}
