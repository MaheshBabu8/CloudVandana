package CloudVandana;

import java.util.HashMap;

public class PangramChecker {

	public static void main(String[] args) {
		String str = "The quick brown fox jumps over the lazy catdgv";
		str = str.toLowerCase();
		HashMap<Character,Integer> map = new HashMap();
		
		for(int i=0;i<str.length();i++)
		{
			Character ch = str.charAt(i);
			if(map.containsKey(str.charAt(i)) )
			{
				map.put(ch,map.get(ch)+1 );
			}
			else
			{
				map.putIfAbsent(str.charAt(i),1);
			}
		}
		System.out.println(map);
		System.out.println(map.size());
		
		if(map.size()<27)
		{
			System.out.println("not panagram2");
		}
		else
		{
			System.out.println(" panagram2");
		}
	}

}
