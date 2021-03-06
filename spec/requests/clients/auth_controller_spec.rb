# frozen_string_literal: true

require 'rails_helper'

RSpec.describe '/clients/auth/', type: :request do
  describe 'POST sign_in' do
    let(:client) { create(:client) }

    context 'with correct email/password' do
      before (:each) do
        post "/clients/auth/sign_in", params: {email: client.email, password: client.password}
      end

      it 'return 200 status' do
        expect(response).to have_http_status(:ok)
        expect(response.status).to eq(200)
      end

      it 'headers contain access-token' do
        expect(response.headers).to include('access-token')
        expect(response.headers['access-token']).to_not be_nil
      end

      it 'body contain uid == email' do
        expect(response.content_type).to include("application/json")
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['data']['uid']).to eq(client.email)
      end
    end

    context 'with wrong password' do
      it 'return 401 status' do
        post "/clients/auth/sign_in", params: {email: client.email, password: client.password+'xyz'}
        expect(response.status).to eq(401)
      end
    end
  end
end
