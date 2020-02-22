# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_29_181519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_users", force: :cascade do |t|
    t.text "credentials"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "applicant_data_for_matchings", force: :cascade do |t|
    t.bigint "applicant_id", null: false
    t.string "program"
    t.string "department"
    t.text "previous_uoft_experience"
    t.integer "yip"
    t.string "annotation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["applicant_id"], name: "index_applicant_data_for_matchings_on_applicant_id"
  end

  create_table "applicants", force: :cascade do |t|
    t.string "utorid", null: false
    t.string "student_number", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_number"], name: "index_applicants_on_student_number", unique: true
    t.index ["utorid"], name: "index_applicants_on_utorid", unique: true
  end

  create_table "applications", force: :cascade do |t|
    t.bigint "session_id", null: false
    t.bigint "applicant_id", null: false
    t.text "comments"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["applicant_id"], name: "index_applications_on_applicant_id"
    t.index ["session_id"], name: "index_applications_on_session_id"
  end

  create_table "assignments", force: :cascade do |t|
    t.bigint "position_id", null: false
    t.bigint "applicant_id", null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.text "note"
    t.string "offer_override_pdf"
    t.integer "active_offer_status", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "active_offer_id"
    t.index ["active_offer_id"], name: "index_assignments_on_active_offer_id"
    t.index ["applicant_id"], name: "index_assignments_on_applicant_id"
    t.index ["position_id", "applicant_id"], name: "index_assignments_on_position_id_and_applicant_id", unique: true
    t.index ["position_id"], name: "index_assignments_on_position_id"
  end

  create_table "contract_templates", force: :cascade do |t|
    t.bigint "session_id", null: false
    t.string "template_name"
    t.string "template_file"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["session_id"], name: "index_contract_templates_on_session_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "utorid", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["utorid"], name: "index_instructors_on_utorid", unique: true
  end

  create_table "instructors_positions", force: :cascade do |t|
    t.bigint "instructor_id"
    t.bigint "position_id"
    t.index ["instructor_id"], name: "index_instructors_positions_on_instructor_id"
    t.index ["position_id"], name: "index_instructors_positions_on_position_id"
  end

  create_table "offers", force: :cascade do |t|
    t.bigint "assignment_id", null: false
    t.string "offer_template"
    t.string "offer_override_pdf"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "position_code"
    t.string "position_title"
    t.datetime "position_start_date"
    t.datetime "position_end_date"
    t.boolean "first_time_ta"
    t.string "instructor_contact_desc"
    t.string "pay_period_desc"
    t.integer "installments"
    t.string "ta_coordinator_name"
    t.string "ta_coordinator_email"
    t.datetime "emailed_date"
    t.string "signature"
    t.datetime "accepted_date"
    t.datetime "rejected_date"
    t.datetime "withdrawn_date"
    t.integer "nag_count", default: 0
    t.string "url_token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "status", default: 0, null: false
    t.index ["assignment_id"], name: "index_offers_on_assignment_id"
    t.index ["url_token"], name: "index_offers_on_url_token"
  end

  create_table "position_data_for_ads", force: :cascade do |t|
    t.bigint "position_id", null: false
    t.text "duties"
    t.text "qualifications"
    t.float "ad_hours_per_assignment"
    t.integer "ad_num_assignments"
    t.datetime "ad_open_date"
    t.datetime "ad_close_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["position_id"], name: "index_position_data_for_ads_on_position_id"
  end

  create_table "position_data_for_matchings", force: :cascade do |t|
    t.bigint "position_id", null: false
    t.integer "desired_num_assignments"
    t.integer "current_enrollment"
    t.integer "current_waitlisted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["position_id"], name: "index_position_data_for_matchings_on_position_id"
  end

  create_table "position_preferences", force: :cascade do |t|
    t.bigint "position_id", null: false
    t.bigint "application_id", null: false
    t.integer "preference_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["application_id"], name: "index_position_preferences_on_application_id"
    t.index ["position_id", "application_id"], name: "index_position_preferences_on_position_id_and_application_id", unique: true
    t.index ["position_id"], name: "index_position_preferences_on_position_id"
  end

  create_table "positions", force: :cascade do |t|
    t.bigint "session_id", null: false
    t.string "position_code"
    t.string "position_title"
    t.float "hours_per_assignment"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "contract_template_id", null: false
    t.index ["contract_template_id"], name: "index_positions_on_contract_template_id"
    t.index ["session_id"], name: "index_positions_on_session_id"
  end

  create_table "positions_reporting_tags", force: :cascade do |t|
    t.bigint "reporting_tag_id"
    t.bigint "position_id"
    t.index ["position_id"], name: "index_positions_reporting_tags_on_position_id"
    t.index ["reporting_tag_id"], name: "index_positions_reporting_tags_on_reporting_tag_id"
  end

  create_table "reporting_tags", force: :cascade do |t|
    t.bigint "position_id", null: false
    t.bigint "wage_chunk_id", null: false
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["position_id"], name: "index_reporting_tags_on_position_id"
    t.index ["wage_chunk_id"], name: "index_reporting_tags_on_wage_chunk_id"
  end

  create_table "reporting_tags_wage_chunks", force: :cascade do |t|
    t.bigint "reporting_tag_id"
    t.bigint "wage_chunk_id"
    t.index ["reporting_tag_id"], name: "index_reporting_tags_wage_chunks_on_reporting_tag_id"
    t.index ["wage_chunk_id"], name: "index_reporting_tags_wage_chunks_on_wage_chunk_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "name"
    t.float "rate1"
    t.float "rate2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "utorid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["utorid"], name: "index_users_on_utorid", unique: true
  end

  create_table "wage_chunks", force: :cascade do |t|
    t.bigint "assignment_id", null: false
    t.float "hours"
    t.float "rate"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assignment_id"], name: "index_wage_chunks_on_assignment_id"
  end

  add_foreign_key "applicant_data_for_matchings", "applicants"
  add_foreign_key "applications", "applicants"
  add_foreign_key "applications", "sessions"
  add_foreign_key "assignments", "applicants"
  add_foreign_key "assignments", "offers", column: "active_offer_id"
  add_foreign_key "assignments", "positions"
  add_foreign_key "contract_templates", "sessions"
  add_foreign_key "offers", "assignments"
  add_foreign_key "position_data_for_ads", "positions"
  add_foreign_key "position_data_for_matchings", "positions"
  add_foreign_key "position_preferences", "applications"
  add_foreign_key "position_preferences", "positions"
  add_foreign_key "positions", "contract_templates"
  add_foreign_key "positions", "sessions"
  add_foreign_key "reporting_tags", "positions"
  add_foreign_key "reporting_tags", "wage_chunks"
  add_foreign_key "wage_chunks", "assignments", on_delete: :cascade
end
