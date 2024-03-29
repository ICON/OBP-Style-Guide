set :application, 'cva-style-guide'
set :repo_url, 'git@github.com:OffBase/cva-style-guide.git'
set :user, 'cpt'
set :deploy_to, "/home/#{fetch(:user)}/#{fetch(:application)}"
set :releases_directory, "/home/#{fetch(:user)}/#{fetch(:application)}/releases"
set :deploy_via, :remote_cache
set :use_sudo, false
set :keep_releases, 10

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

  after :finishing, 'deploy:cleanup'

end