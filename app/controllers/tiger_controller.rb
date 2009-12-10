class TigerController < ApplicationController
  
  def index
    @events = Events.find(:all)
    
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @events }
    end
  end

end
