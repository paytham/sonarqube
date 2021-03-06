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
import * as React from 'react';
import ProfileRules from './ProfileRules';
import ProfileProjects from './ProfileProjects';
import ProfileInheritance from './ProfileInheritance';
import ProfileExporters from './ProfileExporters';
import { IExporter, IProfile } from '../types';

interface Props {
  canAdmin: boolean;
  exporters: IExporter[];
  onRequestFail: (reasong: any) => void;
  organization: string | null;
  profile: IProfile;
  profiles: IProfile[];
  updateProfiles: () => Promise<void>;
}

export default function ProfileDetails(props: Props) {
  return (
    <div>
      <div className="quality-profile-grid">
        <div className="quality-profile-grid-left">
          <ProfileRules {...props} />
          <ProfileExporters {...props} />
        </div>
        <div className="quality-profile-grid-right">
          <ProfileInheritance {...props} />
          <ProfileProjects {...props} />
        </div>
      </div>
    </div>
  );
}
