# desc "Builds, publishes, and deploys to server"
# task :deploy => :publish do
#   sh "git checkout gh-pages && git pull origin gh-pages && git push production gh-pages:production -f && git checkout -"
# end

namespace 'install' do
  desc "Run bundle install + yarn install"
  task :all do
    sh "bundle install && yarn install"
  end  
end

namespace 'build' do
  desc "Generates markdown pages"
  task :generate do
    ruby "./generate.rb"
  end  

  desc "Generate markdown pages + build astro"
  task :all => :generate do
    sh "yarn astro build"
  end 
end