import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state';
import { AddVersionDialog } from './add-version-dialog';
import { Settings } from './settings';
import { TokenDialog } from './token-dialog';

export interface DialogsProps {
  appState: AppState;
}

/**
 * Dialogs (like the GitHub PAT input).
 *
 * @class Dialogs
 * @extends {React.Component<DialogsProps, {}>}
 */
@observer
export class Dialogs extends React.Component<DialogsProps, {}> {
  public render() {
    const { appState } = this.props;
    const { isTokenDialogShowing, isSettingsShowing, isAddVersionDialogShowing } = appState;
    const maybeToken = isTokenDialogShowing
      ? <TokenDialog key='dialogs' appState={appState} />
      : null;
    const maybeSettings = isSettingsShowing
      ? <Settings key='settings' appState={appState} />
      : null;
    const maybeAddLocalVersion = isAddVersionDialogShowing
      ? <AddVersionDialog key='add-version-dialog' appState={appState} />
      : null;

    return (
      <div key='dialogs' className='dialogs'>
        {maybeToken}
        {maybeSettings}
        {maybeAddLocalVersion}
      </div>
    );
  }
}
