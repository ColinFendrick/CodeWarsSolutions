public class MiddleChar {
	public static String getMiddle(String word) {
		int l = word.length();
		if (l%2==1)
			return word.substring(l/2,(l/2)+1);
		return word.substring(l/2-1,l/2+1);
	}
}
