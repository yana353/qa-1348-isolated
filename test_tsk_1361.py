import json
import unittest
from pathlib import Path


EVIDENCE_PATH = Path(__file__).parent / "reports" / "tsk-1361-intake-evidence.json"


def load_evidence():
    with EVIDENCE_PATH.open(encoding="utf-8") as evidence_file:
        return json.load(evidence_file)


def classify_intake_result(issue_numbers, fixture_number):
    """Apply the regression record's pass/fail rule to one sweep result."""
    if fixture_number in issue_numbers:
        return "PASS"
    return "REGRESSION against TSK-1361"


class TestTSK1361Evidence(unittest.TestCase):
    def setUp(self):
        self.evidence = load_evidence()
        self.fixture_number = self.evidence["fixture"]["issue_number"]

    def test_fixture_is_present_at_the_recorded_page_boundary(self):
        boundary = self.evidence["boundary_probe"]
        self.assertEqual(boundary["page_1"]["issue_numbers"], [1, 2, 3, 4])
        self.assertEqual(boundary["page_2"]["issue_numbers"], [self.fixture_number])
        self.assertEqual(
            boundary["fixture_position"],
            {"global_position": 5, "page": 2, "slot": 1, "zero_based_offset": 4},
        )
        self.assertTrue(boundary["observed_inclusion"])
        self.assertEqual(
            classify_intake_result(boundary["page_2"]["issue_numbers"], self.fixture_number),
            "PASS",
        )

    def test_missing_fixture_is_recorded_as_a_tsk_1361_regression(self):
        page_without_fixture = self.evidence["boundary_probe"]["page_1"]["issue_numbers"]
        self.assertEqual(
            classify_intake_result(page_without_fixture, self.fixture_number),
            "REGRESSION against TSK-1361",
        )

    def test_fixture_started_without_labels_before_pickup(self):
        fixture = self.evidence["fixture"]
        self.assertEqual(fixture["initial_labels"], [])
        self.assertEqual(fixture["first_label"]["name"], "ready_for_dev")
        self.assertLess(fixture["created_at"], fixture["first_label"]["occurred_at"])


if __name__ == "__main__":
    unittest.main()
