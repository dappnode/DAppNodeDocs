module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: [ 
            'what-is-dappnode-software',
            'why-would-you-want-to-run-a-dappnode', 
            'what-do-you-need-to-run-a-dappnode',
          ], 
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide-overview',
        {
          type: 'category',
          label: 'UI',
          items: [ 
            {
              type: 'category',
              label: 'Access',
              items: [ 
                'wifi-hotspot',
                'vpn', 
                'cli',
              ], 
            },
            {
              type: 'category',
              label: 'First steps',
              items: [ 
                'first-decisions',
                {
                  type: 'category',
                  label: 'Package Management',
                  items: [ 
                    'what-is-a-package-and-how-it-works',
                    'package-installation',
                    'package-configurations',
                    'package-uninstallation',
                  ], 
                },
              ], 
            },
            {
              type: 'category',
              label: 'Recommended Set ups',
              items: [ 
                'auto-updates',
                'add-vpn-devices',
                'backup-functionality',
                'add-ipfs-peers', 
              ], 
            },
            {
              type: 'category',
              label: 'Advanced Set ups',
              items: [ 
                'ssh-port',
              ], 
            },
          ], 
        },
        {
          type: 'category',
          label: 'Blockchain Environment',
          items: [ 
            'basic-packages',
            'champion-process',
          ], 
        },
        {
          type: 'category',
          label: 'Support',
          items: [ 
            'faqs',
            {
              type: 'category',
              label: 'Channels',
              items: [ 
                'user-guide-forum',
                'user-guide-discord',
              ], 
            },
          ], 
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers-overview',
        {
          type: 'category',
          label: 'Introduction',
          items: [ 
            'what-do-i-need-to-develop-for-dappnode',
            'set-up-dappnode-development-environment',
          ], 
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [ 
            'create-your-first-package',
            'create-your-first-multiservice-package',
          ], 
        },
        {
          type: 'category',
          label: 'Developer Support',
          items: [ 
            'developer-discord',
            'developer-forum',
            'developer-github',
          ], 
        },
      ],
    },
    {
      type: 'category',
      label: 'Learn',
      items: [
        'learn-overview',
        {
          type: 'category',
          label: 'Arquitecture',
          items: [ 
            'core-packages',
            'important-directories',
          ], 
        },
        {
          type: 'category',
          label: 'DAppMannager',
          items: [ 
            'explanation',
            'structure',
          ], 
        },
        {
          type: 'category',
          label: 'Network',
          items: [ 
            'learn-vpn',
            'docker-network',
          ], 
        },
        {
          type: 'category',
          label: 'DAppNodeSDK',
          items: [ 
          'dappnodesdk',
          ], 
        },
      ],
    },
  ],
};

