



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>markdalgleish/stellar.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="markdalgleish/stellar.js" name="twitter:title" /><meta content="stellar.js - Stellar.js - Parallax scrolling made easy" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/696693?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/696693?v=3&amp;s=400" property="og:image" /><meta content="markdalgleish/stellar.js" property="og:title" /><meta content="https://github.com/markdalgleish/stellar.js" property="og:url" /><meta content="stellar.js - Stellar.js - Parallax scrolling made easy" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="0E8BD952:3911:37287D6:5498F4A2" name="octolytics-dimension-request_id" /><meta content="10157121" name="octolytics-actor-id" /><meta content="arijitlaik" name="octolytics-actor-login" /><meta content="467f2c8712b3a125ca1937d6acce7c71e57bbadf55add0828be86c97e664e161" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="ZlkXZ/f+fA2LmPUQzAMXtk3PMe8QdJJ4QMWX7C6Mz/JovOg8AUxfdVl7LOLPP8sMbSq7q6wzF4gLmm3WK4BvnA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9bcf5def7eb44e2a101b20aaecf3707f4b0a10ab8f4d6eebec29371f821c4b29.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-47bc67324d463c7cecb5ee4c009628c91db85b0e9288a9e663f2d06ff9e03088.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="cffc32e08a29062b908cc3ddb47285af">

      
  <meta name="description" content="stellar.js - Stellar.js - Parallax scrolling made easy">
  <meta name="go-import" content="github.com/markdalgleish/stellar.js git https://github.com/markdalgleish/stellar.js.git">

  <meta content="696693" name="octolytics-dimension-user_id" /><meta content="markdalgleish" name="octolytics-dimension-user_login" /><meta content="3114995" name="octolytics-dimension-repository_id" /><meta content="markdalgleish/stellar.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3114995" name="octolytics-dimension-repository_network_root_id" /><meta content="markdalgleish/stellar.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/markdalgleish/stellar.js/commits/master.atom" rel="alternate" title="Recent Commits to stellar.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/markdalgleish/stellar.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/markdalgleish/stellar.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/arijitlaik" data-ga-click="Header, go to profile, text:username">
      <img alt="arijitlaik" class="avatar" data-user="10157121" height="20" src="https://avatars0.githubusercontent.com/u/10157121?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">arijitlaik</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="markdalgleish/stellar.js">This repository</span>
    </li>
      <li>
        <a href="/markdalgleish/stellar.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aLojkqBKQ++g+vhnO32mwqmUwbfEPGXtkGxOGz5IOi9VoAWalXUV54QACEsDmI+oJxcxMggiQEGmBFJpxJ8ORg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="d7wJWTzkc8dupifhUAmaXxBBhHm46S1tBHx+Fa08QSAmIfF+7FWxM1RYJbTi2e5uI+uGMN0ksyzbipc853K88Q==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3114995" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/markdalgleish/stellar.js/watchers">
        194
      </a>
      <a href="/markdalgleish/stellar.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/markdalgleish/stellar.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="A/G8dLirAEoya+wjaGK6U+cweEqXCN9+g1rPJuUMWFEARwOR0yYjQuHKCJGN3u0DTDNGlxrI+L82xCq4KU1uBw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar markdalgleish/stellar.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/markdalgleish/stellar.js/stargazers">
          2,903
        </a>
</form>
    <form accept-charset="UTF-8" action="/markdalgleish/stellar.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pZbVWFHAhPemvuzHcm4kKVcNdffKPvtmKQY/mKVdgwWj9xunO7UpEWpwIBD804K5oko++R34el465aqqJQ7WSA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star markdalgleish/stellar.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/markdalgleish/stellar.js/stargazers">
          2,903
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/markdalgleish/stellar.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of markdalgleish/stellar.js to your account" aria-label="Fork your own copy of markdalgleish/stellar.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/markdalgleish/stellar.js/network" class="social-count">869</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/markdalgleish" class="url fn" itemprop="url" rel="author"><span itemprop="title">markdalgleish</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/markdalgleish/stellar.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">stellar.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/markdalgleish/stellar.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/markdalgleish/stellar.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /markdalgleish/stellar.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/markdalgleish/stellar.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /markdalgleish/stellar.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/markdalgleish/stellar.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /markdalgleish/stellar.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/markdalgleish/stellar.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /markdalgleish/stellar.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/markdalgleish/stellar.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /markdalgleish/stellar.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/markdalgleish/stellar.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /markdalgleish/stellar.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/markdalgleish/stellar.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:markdalgleish/stellar.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/markdalgleish/stellar.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/markdalgleish/stellar.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of markdalgleish/stellar.js as a zip file"
                   title="Download the contents of markdalgleish/stellar.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      Stellar.js - Parallax scrolling made easy
    </div>

    <div class="repository-website">
      <p><a href="http://markdalgleish.com/projects/stellar.js/" rel="nofollow">http://markdalgleish.com/projects/stellar.js/</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/markdalgleish/stellar.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              98
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/markdalgleish/stellar.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/markdalgleish/stellar.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            6
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/markdalgleish/stellar.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      4
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/markdalgleish/stellar.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">96.0%</span>
              </a>
          </li>
          <li>
              <a href="/markdalgleish/stellar.js/search?l=css">
                <span class="color-block language-color" style="background-color:#563d7c;"></span>
                <span class="lang">CSS</span>
                <span class="percent">4.0%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#563d7c">
  <span class="language-color" style="width:96.0%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:4.0%; background-color:#563d7c;" itemprop="keywords">CSS</span>
    </a>
  </div>

<include-fragment src="/markdalgleish/stellar.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/markdalgleish/stellar.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/markdalgleish/stellar.js/compare" aria-label="Compare, review, create a pull request" class="minibutton primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/responsive-backgrounds"
                 data-name="responsive-backgrounds"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="responsive-backgrounds">responsive-backgrounds</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.6.2"
                 data-name="v0.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.2">v0.6.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.6.1"
                 data-name="v0.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.1">v0.6.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.6.0"
                 data-name="v0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.0">v0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.5.0"
                 data-name="v0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.0">v0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.4.0"
                 data-name="v0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.4.0">v0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markdalgleish/stellar.js/tree/v0.3.1"
                 data-name="v0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3.1">v0.3.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/markdalgleish/stellar.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">stellar.js</span></a></span></span><span class="separator">/</span><form action="/markdalgleish/stellar.js/new/master" aria-label="Fork this project and create a new file" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Fork this project and create a new file" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/markdalgleish/stellar.js/commit/145757bb3fc605d9d3c1f17411f1767a4aa14866" class="message" data-pjax="true" title="Add Gitter chat badge to readme

Update &#39;Need help?&#39; paragraph to better reflect the unmaintained status of the project">Add Gitter chat badge to readme</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>Update 'Need help?' paragraph to better reflect the unmaintained status of the project</pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="145757bb3fc605d9d3c1f17411f1767a4aa14866" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/markdalgleish/stellar.js/commit/145757bb3fc605d9d3c1f17411f1767a4aa14866" class="sha-block" data-pjax>latest commit <span class="sha">145757bb3f</span></a>

      <div class="authorship">
        <img alt="Mark Dalgleish" class="avatar" data-user="696693" height="20" src="https://avatars1.githubusercontent.com/u/696693?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/markdalgleish" rel="author">markdalgleish</a></span>
        authored <time class="updated" datetime="2014-11-12T19:43:50Z" is="relative-time">Nov 13, 2014</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/tree/master/libs" class="js-directory-link" id="cb4cb2401e6e43cf74a54523b8da5f02-40c214a30d49bfb9bc96a9b85fedaf386dd8f51c" title="libs">libs</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/5215977f79fd31f63785403459b83421d8cd493b" class="message" data-pjax="true" title="Update jQuery to v1.10.1 and v2.0.2">Update jQuery to v1.10.1 and v2.0.2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-06-17T22:13:32Z" is="time-ago">Jun 18, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/tree/master/src" class="js-directory-link" id="25d902c24283ab8cfbac54dfa101ad31-13350ab6bbab5195dc60aa7a713e55d7bdf45636" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/f3510fbf9a88ff0b32f8f39d40dc59d68401248a" class="message" data-pjax="true" title="Fix IE8- background-position-x/y bug in jQuery 1.9, bump to v0.6.2">Fix IE8- background-position-x/y bug in jQuery 1.9, bump to v0.6.2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-03-05T20:59:55Z" is="time-ago">Mar 6, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/tree/master/test" class="js-directory-link" id="098f6bcd4621d373cade4e832627b4f6-620fa6688bfbb94a2f93f58452240285c706dee7" title="test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/34cb9b8b34489a2c55b0d258e3760ddda6478d95" class="message" data-pjax="true" title="Remove jQuery Git link from test">Remove jQuery Git link from test</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-03-05T21:11:17Z" is="time-ago">Mar 6, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-91dfed8d4a8b9288b24b1b683fca652c4ff266fa" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/7abd936d6f8f29ec8da3f7585572849a9c573568" class="message" data-pjax="true" title="Add &#39;responsive&#39; option">Add 'responsive' option</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-01-01T05:25:04Z" is="time-ago">Jan 1, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/.travis.yml" class="js-directory-link" id="354f30a63fb0907d4ad57269548329e3-c891dd0e0436f13ac781a5e5b33525a9f77fcf89" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/0aafe207b5b7ed223d5308c82990d6167ec966e3" class="message" data-pjax="true" title="Update node version and inc. grunt-cli for CI">Update node version and inc. grunt-cli for CI</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T22:18:20Z" is="time-ago">Mar 25, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/CONTRIBUTING.md" class="js-directory-link" id="6a3371457528722a734f3c51d9238c13-4504aa8d597fc4bb3b8986a6a493609765698d66" title="CONTRIBUTING.md">CONTRIBUTING.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/2f3ef8f4bea543479416a9258b6fad77b02d8213" class="message" data-pjax="true" title="Add CONTRIBUTING.md">Add CONTRIBUTING.md</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T20:07:40Z" is="time-ago">Mar 25, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/Gruntfile.js" class="js-directory-link" id="35b4a816e0441e6a375cd925af50752c-571c4063767ce6f42493d728fe87737a0219cf6b" title="Gruntfile.js">Gruntfile.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/de2350367f161d77100b6904131ca56623d019e7" class="message" data-pjax="true" title="Upgrade to Grunt 0.4">Upgrade to Grunt 0.4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T21:26:52Z" is="time-ago">Mar 25, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/LICENSE-MIT" class="js-directory-link" id="7f0bdbc0a0545831259b66259ac6b604-b590574757d484f26a227587bc6cfabd3885ea64" title="LICENSE-MIT">LICENSE-MIT</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/798539906d124c35cd5b4ecbed1ffcd201d58635" class="message" data-pjax="true" title="Bump to v0.5, update year to 2013">Bump to v0.5, update year to 2013</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-01-01T05:35:33Z" is="time-ago">Jan 1, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-80b1a552d8e35f2f0ef9daa5ca0e36387da94416" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/145757bb3fc605d9d3c1f17411f1767a4aa14866" class="message" data-pjax="true" title="Add Gitter chat badge to readme

Update &#39;Need help?&#39; paragraph to better reflect the unmaintained status of the project">Add Gitter chat badge to readme</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-12T19:43:50Z" is="time-ago">Nov 13, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-100a0ad69780085181854c49c7efd6ed40fb7b57" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/8a35c098f649ba38de0f6fda42a839174155cb34" class="message" data-pjax="true" title="Rename compontent.json to bower.json">Rename compontent.json to bower.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-12-05T04:38:25Z" is="time-ago">Dec 4, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/jquery.stellar.js" class="js-directory-link" id="f2dbfc2e03d1f900834a69ae9d8f3588-020db3a63229b15295f1b3c6a18e92402a4bda47" title="jquery.stellar.js">jquery.stellar.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/de2350367f161d77100b6904131ca56623d019e7" class="message" data-pjax="true" title="Upgrade to Grunt 0.4">Upgrade to Grunt 0.4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T21:26:52Z" is="time-ago">Mar 24, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/jquery.stellar.min.js" class="js-directory-link" id="f0af9e45833c0debbfd2fcb42214f5d1-27f9c9bc19a6bc3fb1f58edccc9b7285d8b9712f" title="jquery.stellar.min.js">jquery.stellar.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/de2350367f161d77100b6904131ca56623d019e7" class="message" data-pjax="true" title="Upgrade to Grunt 0.4">Upgrade to Grunt 0.4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T21:26:52Z" is="time-ago">Mar 24, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-69837d0cb5bec628e1beda051bc6fcb3de329c7a" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/0aafe207b5b7ed223d5308c82990d6167ec966e3" class="message" data-pjax="true" title="Update node version and inc. grunt-cli for CI">Update node version and inc. grunt-cli for CI</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-03-24T22:18:20Z" is="time-ago">Mar 24, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/markdalgleish/stellar.js/blob/master/stellar.jquery.json" class="js-directory-link" id="5ff50710b394ed227fd52e6c93461533-1eeffdffc1b18c03493757435d78f2ca138871e5" title="stellar.jquery.json">stellar.jquery.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/markdalgleish/stellar.js/commit/f3510fbf9a88ff0b32f8f39d40dc59d68401248a" class="message" data-pjax="true" title="Fix IE8- background-position-x/y bug in jQuery 1.9, bump to v0.6.2">Fix IE8- background-position-x/y bug in jQuery 1.9, bump to v0.6.2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-03-05T20:59:55Z" is="time-ago">Mar 5, 2013</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><p><a href="http://travis-ci.org/markdalgleish/stellar.js"><img src="https://camo.githubusercontent.com/4b7f09b511fc6df635d7ce7840703d79a1a1884d/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6d61726b64616c676c656973682f7374656c6c61722e6a732f6d61737465722e7376673f7374796c653d666c6174" alt="Build Status" data-canonical-src="https://img.shields.io/travis/markdalgleish/stellar.js/master.svg?style=flat" style="max-width:100%;"></a> <a href="https://gitter.im/markdalgleish/stellar.js"><img src="https://camo.githubusercontent.com/083f3e51ff149e5262d55a6731c82b900a4b2188/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769747465722d6a6f696e253230636861742d3435636261312e7376673f7374796c653d666c6174" alt="Gitter" data-canonical-src="https://img.shields.io/badge/gitter-join%20chat-45cba1.svg?style=flat" style="max-width:100%;"></a></p>

<h1>
<a id="user-content-stellarjs" class="anchor" href="#stellarjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Stellar.js</h1>

<blockquote>
<p><strong>PLEASE NOTE:</strong> This project is no longer maintained. If parallax scrolling is something you care about, please fork this project. I'm happy to list any notable forks in this readme.</p>
</blockquote>

<h3>
<a id="user-content-parallax-scrolling-made-easy" class="anchor" href="#parallax-scrolling-made-easy" aria-hidden="true"><span class="octicon octicon-link"></span></a>Parallax scrolling made easy</h3>

<p>Full guide and demonstrations available at the <a href="http://markdalgleish.com/projects/stellar.js/">official Stellar.js project page</a>.</p>

<h2>
<a id="user-content-download" class="anchor" href="#download" aria-hidden="true"><span class="octicon octicon-link"></span></a>Download</h2>

<p>Get the <a href="https://raw.github.com/markdalgleish/stellar.js/master/jquery.stellar.js">development</a> or <a href="https://raw.github.com/markdalgleish/stellar.js/master/jquery.stellar.min.js">production</a> version, or use a <a href="https://github.com/markdalgleish/stellar.js#package-managers">package manager</a>.</p>

<h2>
<a id="user-content-getting-started" class="anchor" href="#getting-started" aria-hidden="true"><span class="octicon octicon-link"></span></a>Getting Started</h2>

<p>Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element. The first step is to run <code>.stellar()</code> against the element:</p>

<div class="highlight highlight-js"><pre><span class="pl-c">// For example:</span>
$(<span class="pl-s3">window</span>).stellar();
<span class="pl-c">// or:</span>
$(<span class="pl-s1"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).stellar();</pre></div>

<p>If you're running Stellar.js on 'window', you can use the shorthand:</p>

<div class="highlight highlight-js"><pre>$.stellar();</pre></div>

<p>This will look for any parallax backgrounds or elements within the specified element and reposition them when the element scrolls.</p>

<h2>
<a id="user-content-mobile-support" class="anchor" href="#mobile-support" aria-hidden="true"><span class="octicon octicon-link"></span></a>Mobile Support</h2>

<p>Support in Mobile WebKit browsers requires a touch scrolling library, and a slightly tweaked configuration. For a full walkthrough on how to implement this correctly, read my blog post <a href="http://markdalgleish.com/2012/10/mobile-parallax-with-stellar-js">"Mobile Parallax with Stellar.js"</a>.</p>

<p>Please note that parallax backgrounds are not recommended in Mobile WebKit due to performance constraints. Instead, use parallax elements with static backgrounds.</p>

<h2>
<a id="user-content-parallax-elements" class="anchor" href="#parallax-elements" aria-hidden="true"><span class="octicon octicon-link"></span></a>Parallax Elements</h2>

<p>If you want elements to scroll at a different speed, add the following attribute to any element with a CSS position of absolute, relative or fixed:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-stellar-ratio</span>=<span class="pl-s1"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>&gt;</pre></div>

<p>The ratio is relative to the natural scroll speed, so a ratio of 0.5 would cause the element to scroll at half-speed, a ratio of 1 would have no effect, and a ratio of 2 would cause the element to scroll at twice the speed. If a ratio lower than 1 is causing the element to appear jittery, try setting its CSS position to fixed.</p>

<p>In order for Stellar.js to perform its calculations correctly, all parallax elements must have their dimensions specified in pixels for the axis/axes being used for parallax effects. For example, all parallax elements for a vertical site must have a pixel height specified. If your design prohibits the use of pixels, try using the <a href="#configuring-everything">'responsive' option</a>.</p>

<h2>
<a id="user-content-parallax-backgrounds" class="anchor" href="#parallax-backgrounds" aria-hidden="true"><span class="octicon octicon-link"></span></a>Parallax Backgrounds</h2>

<p>If you want an element's background image to reposition on scroll, simply add the following attribute:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-stellar-background-ratio</span>=<span class="pl-s1"><span class="pl-pds">"</span>0.5<span class="pl-pds">"</span></span>&gt;</pre></div>

<p>As with parallax elements, the ratio is relative to the natural scroll speed. For ratios lower than 1, to avoid jittery scroll performance, set the element's CSS 'background-attachment' to fixed.</p>

<h2>
<a id="user-content-configuring-offsets" class="anchor" href="#configuring-offsets" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuring Offsets</h2>

<p>Stellar.js' most powerful feature is the way it aligns elements.</p>

<p>All elements will return to their original positioning when their offset parent meets the edge of the screen—plus or minus your own optional offset. This allows you to create intricate parallax patterns very easily.</p>

<p>Confused? <a href="http://markdalgleish.com/projects/stellar.js/#show-offsets">See how offsets are used on the Stellar.js home page.</a></p>

<p>To modify the offsets for all elements at once, pass in the options:</p>

<div class="highlight highlight-js"><pre>$.stellar({
  horizontalOffset<span class="pl-k">:</span> <span class="pl-c1">40</span>,
  verticalOffset<span class="pl-k">:</span> <span class="pl-c1">150</span>
});</pre></div>

<p>You can also modify the offsets on a per-element basis using the following data attributes:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-stellar-ratio</span>=<span class="pl-s1"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>
     <span class="pl-e">data-stellar-horizontal-offset</span>=<span class="pl-s1"><span class="pl-pds">"</span>40<span class="pl-pds">"</span></span>
     <span class="pl-e">data-stellar-vertical-offset</span>=<span class="pl-s1"><span class="pl-pds">"</span>150<span class="pl-pds">"</span></span>&gt;</pre></div>

<h2>
<a id="user-content-configuring-offset-parents" class="anchor" href="#configuring-offset-parents" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuring Offset Parents</h2>

<p>By default, offsets are relative to the element's offset parent. This mirrors the way an absolutely positioned element behaves when nested inside an element with a relative position.</p>

<p>As with regular CSS, the closest parent element with a position of relative or absolute is the offset parent.</p>

<p>To override this and force the offset parent to be another element higher up the DOM, use the following data attribute:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-stellar-offset-parent</span>=<span class="pl-s1"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span>&gt;</pre></div>

<p>The offset parent can also have its own offsets:</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">data-stellar-offset-parent</span>=<span class="pl-s1"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span>
     <span class="pl-e">data-stellar-horizontal-offset</span>=<span class="pl-s1"><span class="pl-pds">"</span>40<span class="pl-pds">"</span></span>
     <span class="pl-e">data-stellar-vertical-offset</span>=<span class="pl-s1"><span class="pl-pds">"</span>150<span class="pl-pds">"</span></span>&gt;</pre></div>

<p>Similar to CSS, the rules take precedence from element, to offset parent, to JavaScript options.</p>

<p>Confused? <a href="http://markdalgleish.com/projects/stellar.js/#show-offset-parents">See how offset parents are used on the Stellar.js home page.</a></p>

<p>Still confused? <a href="http://markdalgleish.com/projects/stellar.js/#show-offset-parents-default">See what it looks like with its default offset parents.</a> Notice how the alignment happens on a per-letter basis? That's because each letter's containing div is its default offset parent.</p>

<p>By specifying the h2 element as the offset parent, we can ensure that the alignment of all the stars in a heading is based on the h2 and not the div further down the DOM tree.</p>

<h2>
<a id="user-content-configuring-scroll-positioning" class="anchor" href="#configuring-scroll-positioning" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuring Scroll Positioning</h2>

<p>You can define what it means for an element to 'scroll'. Whether it's the element's scroll position that's changing, its margins or its CSS3 'transform' position, you can define it using the 'scrollProperty' option:</p>

<div class="highlight highlight-js"><pre>$(<span class="pl-s1"><span class="pl-pds">'</span>#gallery<span class="pl-pds">'</span></span>).stellar({
  scrollProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>transform<span class="pl-pds">'</span></span>
});</pre></div>

<p>This option is what allows you to run <a href="http://markdalgleish.com/projects/stellar.js/demos/ios.html">Stellar.js on iOS</a>.</p>

<p>You can even define how the elements are repositioned, whether it's through standard top and left properties or using CSS3 transforms:</p>

<div class="highlight highlight-js"><pre>$(<span class="pl-s1"><span class="pl-pds">'</span>#gallery<span class="pl-pds">'</span></span>).stellar({
  positionProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>transform<span class="pl-pds">'</span></span>
});</pre></div>

<p>Don't have the level of control you need? Write a plugin!</p>

<p>Otherwise, you're ready to get started!</p>

<h2>
<a id="user-content-configuring-everything" class="anchor" href="#configuring-everything" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuring Everything</h2>

<p>Below you will find a complete list of options and matching default values:</p>

<div class="highlight highlight-js"><pre>$.stellar({
  <span class="pl-c">// Set scrolling to be in either one or both directions</span>
  horizontalScrolling<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  verticalScrolling<span class="pl-k">:</span> <span class="pl-c1">true</span>,

  <span class="pl-c">// Set the global alignment offsets</span>
  horizontalOffset<span class="pl-k">:</span> <span class="pl-c1">0</span>,
  verticalOffset<span class="pl-k">:</span> <span class="pl-c1">0</span>,

  <span class="pl-c">// Refreshes parallax content on window load and resize</span>
  responsive<span class="pl-k">:</span> <span class="pl-c1">false</span>,

  <span class="pl-c">// Select which property is used to calculate scroll.</span>
  <span class="pl-c">// Choose 'scroll', 'position', 'margin' or 'transform',</span>
  <span class="pl-c">// or write your own 'scrollProperty' plugin.</span>
  scrollProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>scroll<span class="pl-pds">'</span></span>,

  <span class="pl-c">// Select which property is used to position elements.</span>
  <span class="pl-c">// Choose between 'position' or 'transform',</span>
  <span class="pl-c">// or write your own 'positionProperty' plugin.</span>
  positionProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>position<span class="pl-pds">'</span></span>,

  <span class="pl-c">// Enable or disable the two types of parallax</span>
  parallaxBackgrounds<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  parallaxElements<span class="pl-k">:</span> <span class="pl-c1">true</span>,

  <span class="pl-c">// Hide parallax elements that move outside the viewport</span>
  hideDistantElements<span class="pl-k">:</span> <span class="pl-c1">true</span>,

  <span class="pl-c">// Customise how elements are shown and hidden</span>
  <span class="pl-en">hideElement</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$elem</span>) { $elem.hide(); },
  <span class="pl-en">showElement</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$elem</span>) { $elem.show(); }
});</pre></div>

<h2>
<a id="user-content-writing-a-scroll-property-plugin" class="anchor" href="#writing-a-scroll-property-plugin" aria-hidden="true"><span class="octicon octicon-link"></span></a>Writing a Scroll Property Plugin</h2>

<p>Out of the box, Stellar.js supports the following scroll properties:
'scroll', 'position', 'margin' and 'transform'.</p>

<p>If your method for creating a scrolling interface isn't covered by one of these, you can write your own. For example, if 'margin' didn't exist yet you could write it like so:</p>

<div class="highlight highlight-js"><pre>$.stellar.scrollProperty.margin <span class="pl-k">=</span> {
  <span class="pl-en">getLeft</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$element</span>) {
    <span class="pl-k">return</span> <span class="pl-s3">parseInt</span>($element.css(<span class="pl-s1"><span class="pl-pds">'</span>margin-left<span class="pl-pds">'</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">*</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;
  },
  <span class="pl-en">getTop</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$element</span>) {
    <span class="pl-k">return</span> <span class="pl-s3">parseInt</span>($element.css(<span class="pl-s1"><span class="pl-pds">'</span>margin-top<span class="pl-pds">'</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">*</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;
  }
}</pre></div>

<p>Now, you can specify this scroll property in Stellar.js' configuration.</p>

<div class="highlight highlight-js"><pre>$.stellar({
  scrollProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>margin<span class="pl-pds">'</span></span>
});</pre></div>

<h2>
<a id="user-content-writing-a-position-property-plugin" class="anchor" href="#writing-a-position-property-plugin" aria-hidden="true"><span class="octicon octicon-link"></span></a>Writing a Position Property Plugin</h2>

<p>Stellar.js has two methods for positioning elements built in: 'position' for modifying its top and left properties, and 'transform' for using CSS3 transforms.</p>

<p>If you need more control over how elements are positioned, you can write your own setter functions. For example, if 'position' didn't exist yet, it could be written as a plugin like this:</p>

<div class="highlight highlight-js"><pre>$.stellar.positionProperty.position <span class="pl-k">=</span> {
  <span class="pl-en">setTop</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$element</span>, <span class="pl-vpf">newTop</span>, <span class="pl-vpf">originalTop</span>) {
    $element.css(<span class="pl-s1"><span class="pl-pds">'</span>top<span class="pl-pds">'</span></span>, newTop);
  },
  <span class="pl-en">setLeft</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$element</span>, <span class="pl-vpf">newLeft</span>, <span class="pl-vpf">originalLeft</span>) {
    $element.css(<span class="pl-s1"><span class="pl-pds">'</span>left<span class="pl-pds">'</span></span>, newLeft);
  }
}</pre></div>

<p>Now, you can specify this position property in Stellar.js' configuration.</p>

<div class="highlight highlight-js"><pre>$.stellar({
  positionProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>position<span class="pl-pds">'</span></span>
});</pre></div>

<p>If, for technical reasons, you need to set both properties at once, you can define a single 'setPosition' function:</p>

<div class="highlight highlight-js"><pre>$.stellar.positionProperty.foobar <span class="pl-k">=</span> {
  <span class="pl-en">setPosition</span>: <span class="pl-st">function</span>(<span class="pl-vpf">$element</span>, <span class="pl-vpf">newLeft</span>, <span class="pl-vpf">originalLeft</span>, <span class="pl-vpf">newTop</span>, <span class="pl-vpf">originalTop</span>) {
    $element.css(<span class="pl-s1"><span class="pl-pds">'</span>transform<span class="pl-pds">'</span></span>, <span class="pl-s1"><span class="pl-pds">'</span>translate3d(<span class="pl-pds">'</span></span> <span class="pl-k">+</span>
      (newLeft <span class="pl-k">-</span> originalLeft) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">'</span>px, <span class="pl-pds">'</span></span> <span class="pl-k">+</span>
      (newTop <span class="pl-k">-</span> originalTop) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">'</span>px, <span class="pl-pds">'</span></span> <span class="pl-k">+</span>
      <span class="pl-s1"><span class="pl-pds">'</span>0)<span class="pl-pds">'</span></span>);
  }
}

$.stellar({
  positionProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">'</span>foobar<span class="pl-pds">'</span></span>
});</pre></div>

<h2>
<a id="user-content-package-managers" class="anchor" href="#package-managers" aria-hidden="true"><span class="octicon octicon-link"></span></a>Package Managers</h2>

<p>Stellar.js can be installed with <a href="http://twitter.github.com/bower/">Bower</a>:</p>

<div class="highlight highlight-bash"><pre>$ bower install jquery.stellar</pre></div>

<h2>
<a id="user-content-sites-using-stellarjs" class="anchor" href="#sites-using-stellarjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Sites Using Stellar.js</h2>

<ul class="task-list">
<li><a href="http://channel.nationalgeographic.com/channel/alien-deep/interactives/alien-deep-interactive">National Geographic - Alien Deep Interactive</a></li>
<li><a href="http://www.parti-socialiste.fr/latimelineduchangement">François Hollande</a></li>
<li><a href="http://www.brabus-aviation.com/">Brabus Private Aviation</a></li>
<li><a href="http://www.maryandfrankiewedding.com/">Mary and Frankie's Wedding</a></li>
<li><a href="http://www.itsupportlondon.com">IT Support London</a></li>
<li><a href="http://bright.ashford.edu">Ashford University</a></li>
<li><a href="http://www.clifbar.com/adventures">Clif Adventures</a></li>
<li><a href="http://www.mindster.org">Mindster</a></li>
<li><a href="http://www.ws-interactive.fr/methode">WS Interactive</a></li>
<li><a href="http://www.moiremag.net/untitled">Moire Mag - Untitled</a></li>
<li><a href="http://www.carnivalofcourage.com.au">Carnival of Courage</a></li>
<li><a href="http://www.ianpoulter.com">Ian Poulter</a></li>
<li><a href="http://360strategygroup.com">360 Strategy Group</a></li>
<li><a href="http://codeloveandboards.com/">Code, Love and Boards</a></li>
</ul>

<p>I'm sure there are heaps more. <a href="http://twitter.com/markdalgleish">Let me know if you'd like me to feature your site here.</a></p>

<h2>
<a id="user-content-how-to-build" class="anchor" href="#how-to-build" aria-hidden="true"><span class="octicon octicon-link"></span></a>How to Build</h2>

<p>Stellar.js uses <a href="/markdalgleish/stellar.js/blob/master/nodejs.org">Node.js</a>, <a href="http://gruntjs.com">Grunt</a> and <a href="http://phantomjs.org/">PhantomJS</a>.</p>

<p>Once you've got Node and PhantomJS set up, install the dependencies:</p>

<p><code>$ npm install</code></p>

<p>To lint, test and minify the project, simply run the following command:</p>

<p><code>$ grunt</code></p>

<p>Each of the build steps are also available individually.</p>

<p><code>$ grunt test</code> to test the code using QUnit and PhantomJS: </p>

<p><code>$ grunt lint</code> to validate the code using JSHint.</p>

<p><code>$ grunt watch</code> to continuously lint and test the code while developing.</p>

<h2>
<a id="user-content-need-help" class="anchor" href="#need-help" aria-hidden="true"><span class="octicon octicon-link"></span></a>Need help?</h2>

<p>As this project is now unmaintained, your best bet is to try the <a href="https://gitter.im/markdalgleish/stellar.js">Gitter chat room</a> or <a href="http://stackoverflow.com/">Stack Overflow</a>.</p>

<h2>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h2>

<p>Copyright 2013, Mark Dalgleish<br>
This content is released under the MIT license<br>
<a href="http://markdalgleish.mit-license.org">http://markdalgleish.mit-license.org</a></p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06167s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fc447938e306b7b2c26a33cfee9dfda9052aeb1aa6ad84b72f1b35fd008efe9e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-56c56f7fe2ed90ca50b9eefebccd56f3b9729a85d7ba17f0f9c9ebd02f20a7e3.js" type="text/javascript"></script>
      
      
  </body>
</html>

