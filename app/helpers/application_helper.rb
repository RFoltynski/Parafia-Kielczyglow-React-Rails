module ApplicationHelper
  def cp(path)
     if request.url.include?(path)
     "navbar-link-active"
    else
      "navbar-link"
    end
  end
end
