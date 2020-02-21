public class DontGiveMeFive {
	public static int dontGiveMeFive(int start, int end) {
		int count = 0;
		for (int i = start; i <= end; i++)
			count += containsFive(i)?0:1;
		return count;
	}

	private static boolean containsFive(int i) {
		return String.valueOf(i).contains("5");
	}
}

