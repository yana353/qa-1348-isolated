import unittest

from calc import add, greet


class TestCalc(unittest.TestCase):
      def test_add(self):
                self.assertEqual(add(2, 2), 4)

      def test_greet(self):
                self.assertEqual(greet("World"), "Hello, World!")

      def test_baseline_known_issue(self):
                # QA-1362 fixture: intentionally-failing pre-existing check, unrelated
                # to any task. A task that doesn't touch this behavior should make QA
                # report "Unverified" (inherited baseline failure), not "Fail".
                self.fail("pre-existing baseline failure (QA-1362 fixture)")


if __name__ == "__main__":
      unittest.main()
  
