import { atom } from 'recoil';
import { localStorageEffect } from './StateUtils';

interface PlayerState {
  name: string | null;
}

const defaultPlayerState: PlayerState = Object.freeze({
  name: null,
});

export const playerState = atom<PlayerState>({
  key: 'playerState',
  default: {...defaultPlayerState},
  effects: [localStorageEffect('playerState')],
});