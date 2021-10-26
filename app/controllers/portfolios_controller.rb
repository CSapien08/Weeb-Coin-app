class PortfoliosController < ApplicationController
    before_action :authenticate_user!
    def index
        portfolios = current_user.portfolios.order(created_at: :desc)
        render json: portfolios.as_json(include: [:coin, :user])
    end

    def create
        portfolio = current_user.portfolios.create(portfolio_params)
        if portfolio.valid?
            render json: portfolio
        else
            render json: portfolio.errors, status: 422
        end
    end

    def update
        portfolio = current_user.portfolios.update(portfolio_params)
        render json: portfolio
    end

    def destroy
        portfolio = current_user.portfolios.find(params[:id])
        portfolio.destroy
        # render json: portfolio

        if portfolio.valid?
            render json: portfolio
        else
            render json: portfolio.errors, status: 422
        end
    end

    private
    def portfolio_params
        params.require(:portfolio).permit(:current_quantity, :initial_quantity, :coin_id, :user_id)
      end
end
