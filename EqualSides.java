public class EqualSides {
	public static int findEvenIndex(int[] arr) {
		int right= 0;
		int left = 0;

		for (int i = 0; i < arr.length; i++)
			right+=arr[i];

		for (int i = 0; i < arr.length; i++) {
			right -= arr[i];
			if (right==left)
			return i;
			left += arr[i];
		}

		return -1;
	}
}
