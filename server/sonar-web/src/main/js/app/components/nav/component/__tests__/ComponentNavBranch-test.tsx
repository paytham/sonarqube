/*
 * SonarQube
 * Copyright (C) 2009-2016 SonarSource SA
 * mailto:contact AT sonarsource DOT com
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
import * as React from 'react';
import { shallow } from 'enzyme';
import ComponentNavBranch from '../ComponentNavBranch';
import { BranchType, ShortLivingBranch, MainBranch, Component } from '../../../../types';
import { click } from '../../../../../helpers/testUtils';

it('renders main branch', () => {
  const branch: MainBranch = { isMain: true, name: undefined, type: BranchType.LONG };
  const component = {} as Component;
  expect(shallow(<ComponentNavBranch branch={branch} project={component} />)).toMatchSnapshot();
});

it('renders short-living branch', () => {
  const branch: ShortLivingBranch = {
    isMain: false,
    name: 'foo',
    status: { bugs: 0, codeSmells: 0, vulnerabilities: 0 },
    type: BranchType.SHORT
  };
  const component = {} as Component;
  expect(shallow(<ComponentNavBranch branch={branch} project={component} />)).toMatchSnapshot();
});

it('opens menu', () => {
  const branch: MainBranch = { isMain: true, name: undefined, type: BranchType.LONG };
  const component = {} as Component;
  const wrapper = shallow(<ComponentNavBranch branch={branch} project={component} />);
  expect(wrapper.find('ComponentNavBranchesMenu')).toHaveLength(0);
  click(wrapper.find('a'));
  expect(wrapper.find('ComponentNavBranchesMenu')).toHaveLength(1);
});