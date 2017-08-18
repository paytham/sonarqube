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
import { IntlProvider } from 'react-intl';
import GlobalLoading from './GlobalLoading';
import { DEFAULT_LANGUAGE, requestMessages } from '../../helpers/l10n';

interface Props {
  children?: any;
}

interface State {
  loading: boolean;
  lang?: string;
}

export default class LocalizationContainer extends React.PureComponent<Props, State> {
  mounted: boolean;

  state: State = { loading: true };

  componentDidMount() {
    this.mounted = true;
    requestMessages().then(this.finishLoading, this.finishLoading);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  finishLoading = (lang: string) => {
    if (this.mounted) {
      this.setState({ loading: false, lang });
    }
  };

  render() {
    if (this.state.loading) {
      return <GlobalLoading />;
    }
    return (
      <IntlProvider
        locale={this.state.lang || DEFAULT_LANGUAGE}
        defaultLocale={this.state.lang || DEFAULT_LANGUAGE}>
        {this.props.children}
      </IntlProvider>
    );
  }
}
