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
package org.sonar.process;

import java.util.Optional;
import javax.annotation.Nullable;

import static java.util.Arrays.stream;

public enum NodeType {
  APPLICATION("application"), SEARCH("search");

  private final String value;

  NodeType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public static NodeType parse(Optional<String> nodeType) {
    return parse(nodeType.orElse(null));
  }

  public static NodeType parse(@Nullable String nodeType) {
    if (nodeType == null) {
      throw new IllegalStateException("Setting [" + ProcessProperties.CLUSTER_NODE_TYPE + "] is mandatory");
    }
    return stream(values())
      .filter(t -> nodeType.equals(t.value))
      .findFirst()
      .orElseThrow(() -> new IllegalStateException("Invalid value for [" + ProcessProperties.CLUSTER_NODE_TYPE + "]: [" + nodeType + "]"));
  }

  public static boolean isValid(String nodeType) {
    return stream(values())
      .anyMatch(t -> nodeType.equals(t.value));
  }
}
