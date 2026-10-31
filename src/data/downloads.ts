const bases = {
  release: 'https://github.com/tiouoo/Basic Craft Launcher/releases/latest/download',
  nightly: 'https://github.com/tiouoo/Basic Craft Launcher/releases/download/publish-nightly',
  commit: 'https://github.com/tiouoo/Basic Craft Launcher/releases/download/publish-commit',
};

const cnbBases = {
  release: 'https://cnb.cool/tiouo/Basic Craft Launcher/-/releases/latest/download',
  nightly: 'https://cnb.cool/tiouo/Basic Craft Launcher/-/releases/download/publish-nightly',
  commit: 'https://cnb.cool/tiouo/Basic Craft Launcher/-/releases/download/publish-commit',
};

type Channel = keyof typeof bases;

export const channelBase = (channel: Channel) => bases[channel] || bases.nightly;
export const cnbBase = (channel: Channel) => cnbBases[channel] || cnbBases.nightly;

export const platforms = [
  {
    id: 'windows',
    name: 'Windows',
    detail: 'Windows 10 / 11',
    icon: 'windows',
    primary: { label: '前往 GitHub 下载', meta: 'zip', file: '' },
    links: [],
  },
];