import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Scratch {
  public static void main(String[] args) {
    String x = "https://buildkite.com/elastic/kibana-code-coverage-main/builds/249";
    String[] r = "[0-9]*$/".split(x);
    System.out.println(x);
  }
}
