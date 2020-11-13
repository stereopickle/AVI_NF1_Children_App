class Api::V1::EventController < ApplicationController

    def test 
        render json: {msg: "Success"}, status: :ok
    end
    
end
