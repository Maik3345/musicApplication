import dev from './dev';
import prod from './prop';

const configForStage: Partial<EnvironmentConfig> = process.env.NODE_ENV === 'production' ? prod : dev;
const commons: Partial<EnvironmentConfig> = {
  // Common configuration for both environments
};

const config: Partial<EnvironmentConfig> = {
  ...commons,
  ...configForStage,
};

export default config;
