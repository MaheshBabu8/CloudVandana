package CloudVandana;

import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "XII"; // Example Roman numeral

        int result = romanToInt(romanNumeral);
        System.out.println("Integer value of " + romanNumeral + " is: " + result);
    }

    public static int romanToInt(String s) {
        // Create a mapping of Roman numerals to integer values
        Map<Character, Integer> romanToInteger = new HashMap<>();
        romanToInteger.put('I', 1);
        romanToInteger.put('V', 5);
        romanToInteger.put('X', 10);
        romanToInteger.put('L', 50);
        romanToInteger.put('C', 100);
        romanToInteger.put('D', 500);
        romanToInteger.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentVal = romanToInteger.get(s.charAt(i));
            int nextVal = (i < s.length() - 1) ? romanToInteger.get(s.charAt(i + 1)) : 0;

            if (currentVal < nextVal) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }

        return result;
    }
}

