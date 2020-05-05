import utils.MorseCode;

public class MorseCodeDecoder {
  public static String decode(String morseCode) {
    StringBuilder sb = new StringBuilder();
    for (String code : morseCode.trim().replace("   ", " / ").split(" "))
      sb.append(code.equals("/") ? " " : MorseCode.get(code));
    return sb.toString();
  }
}
