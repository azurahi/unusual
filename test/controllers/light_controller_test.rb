require 'test_helper'

class LightControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get dot" do
    get :dot
    assert_response :success
  end

end
