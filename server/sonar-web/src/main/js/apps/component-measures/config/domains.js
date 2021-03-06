/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// @flow
export const domains = {
  Reliability: {
    order: [
      'new_reliability_rating',
      'new_bugs',
      'new_reliability_remediation_effort',

      'reliability_rating',
      'bugs',
      'reliability_remediation_effort'
    ]
  },

  Security: {
    order: [
      'new_security_rating',
      'new_vulnerabilities',
      'new_security_remediation_effort',

      'security_rating',
      'vulnerabilities',
      'security_remediation_effort'
    ]
  },

  Maintainability: {
    order: [
      'new_code_smells',
      'new_maintainability_rating',
      'new_technical_debt',
      'new_sqale_debt_ratio',

      'code_smells',
      'sqale_rating',
      'sqale_index',
      'sqale_debt_ratio',
      'effort_to_reach_maintainability_rating_a'
    ]
  },

  Coverage: {
    order: [
      'new_coverage',
      'new_line_coverage',
      'new_branch_coverage',
      'new_uncovered_lines',
      'new_uncovered_conditions',
      'new_lines_to_cover',

      'coverage',
      'line_coverage',
      'branch_coverage',
      'uncovered_lines',
      'uncovered_conditions',
      'lines_to_cover',

      'tests',
      'test_success',
      'test_errors',
      'test_failures',
      'skipped_tests',
      'test_success_density',
      'test_execution_time'
    ]
  },

  Duplications: {
    order: [
      'new_duplicated_lines_density',
      'new_duplicated_blocks',
      'new_duplicated_lines',

      'duplicated_lines_density',
      'duplicated_blocks',
      'duplicated_lines',
      'duplicated_files'
    ]
  },

  Size: {
    order: [
      'new_lines',

      'ncloc',
      'lines',
      'statements',
      'functions',
      'classes',
      'files',
      'directories'
    ]
  },

  Complexity: {
    order: ['complexity', 'function_complexity', 'file_complexity', 'class_complexity']
  },

  Releasability: {
    order: ['releasability_rating', 'releasability_effort', 'alert_status']
  },

  Issues: {
    order: [
      'new_violations',
      'new_blocker_violations',
      'new_critical_violations',
      'new_major_violations',
      'new_minor_violations',
      'new_info_violations',

      'violations',
      'blocker_violations',
      'critical_violations',
      'major_violations',
      'minor_violations',
      'info_violations',
      'open_issues',
      'reopened_issues',
      'confirmed_issues',
      'false_positive_issues'
    ]
  }
};
