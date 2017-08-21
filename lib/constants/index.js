module.exports = {
  BASE_URL: 'https://api.pdffiller.com',

  AUTH_ENDPOINT: '/v2/oauth/token',

  TEMPLATES_ENDPOINT: '/v2/templates',
  TEMPLATES_BY_ID_ENDPOINT: '/v2/templates/{template_id}',
  TEMPLATES_DOWNLOAD_ENDPOINT: '/v2/templates/{template_id}/download',
  TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT: '/v2/templates/{template_id}/original_document',
  TEMPLATES_ROLES_ENDPOINT: '/v2/templates/{template_id}/roles',
  TEMPLATES_FIELDS_ENDPOINT: '/v2/templates/{template_id}/fields',
  TEMPLATES_FILLED_DOCS_ENDPOINT: '/v2/templates/{template_id}/filled_documents',
  TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT: '/v2/templates/{template_id}/download_signatures',
  TEMPLATES_CONSTRUCTOR_ENDPOINT: '/v2/templates/{template_id}/constructor',

  FILLABLE_FORMS_ENDPOINT: '/v2/fillable_forms',
  FILLABLE_FORMS_BY_ID_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}',
  FILLABLE_FORMS_DOWNLOAD_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/download',
  FILLABLE_FORMS_FILLED_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms',
  FILLABLE_FORMS_FILLED_BY_ID_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}',
  FILLABLE_FORMS_FILLED_EXPORT_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/export',
  FILLABLE_FORMS_FILLED_DOWNLOAD_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/download',
  FILLABLE_FORMS_FILLED_ADDITIONAL_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/additional_documents',
  FILLABLE_FORMS_FILLED_ADDITIONAL_DOWNLOAD_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/additional_documents/download',
  FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/additional_documents/{additional_document_id}',
  FILLABLE_FORMS_FILLED_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT: '/v2/fillable_forms/{link_to_fill_id}/filled_forms/{filled_form_id}/additional_documents/{additional_document_id}/download',

  SIGNATURE_REQUESTS_ENDPOINT: '/v2/signature_requests',
  SIGNATURE_REQUESTS_BY_ID_ENDPOINT: '/v2/signature_requests/{signature_request_id}',
  SIGNATURE_REQUESTS_CERTIFICATE_ENDPOINT: '/v2/signature_requests/{signature_request_id}/certificate',
  SIGNATURE_REQUESTS_SIGNED_ENDPOINT: '/v2/signature_requests/{signature_request_id}/signed_document',
  SIGNATURE_REQUESTS_INBOX_ENDPOINT: '/v2/signature_requests/inbox',
  SIGNATURE_REQUESTS_INBOX_DOWNLOAD_ENDPOINT: '/v2/signature_requests/inbox/download',
  SIGNATURE_REQUESTS_RECIPIENTS_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients',
  SIGNATURE_REQUESTS_RECIPIENTS_BY_ID_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}',
  SIGNATURE_REQUESTS_RECIPIENTS_REMIND_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}',
  SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}/additional_documents',
  SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_DOWNLOAD_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}/additional_documents/download',
  SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}/additional_documents/{additional_document_id}',
  SIGNATURE_REQUESTS_RECIPIENTS_ADDITIONAL_BY_ID_DOWNLOAD_ENDPOINT: '/v2/signature_requests/{signature_request_id}/recipients/{recipient_id}/additional_documents/{additional_document_id}/download',

  APPLICATIONS_ENDPOINT: '/v2/applications',
  APPLICATIONS_BY_ID_ENDPOINT: '/v2/applications/{application_id}',
  APPLICATIONS_USERS_BY_ID_ENDPOINT: '/v2/applications/{application_id}/users',

  CALLBACKS_ENDPOINT: '/v2/callbacks',
  CALLBACKS_BY_ID_ENDPOINT: '/v2/callbacks/{callback_id}',

  CALLBACKS_GLOBAL_ENDPOINT: '/v2/callbacks/global',

  FOLDERS_ENDPOINT: '/v2/folders',
  FOLDERS_BY_ID_ENDPOINT: '/v2/folders/{folder_id}',

  TOKENS_ENDPOINT: '/v2/tokens',
  TOKENS_BY_ID_ENDPOINT: '/v2/tokens/{token_id}',

  CUSTOM_LOGOS_ENDPOINT: '/v2/custom_branding/custom_logo',
  CUSTOM_LOGOS_BY_ID_ENDPOINT: '/v2/custom_branding/custom_logo/{custom_logo_id}',

  USERS_ENDPOINT: '/v2/users/me',

  TOOLS_MERGE_ENDPOINT: '/v2/users/me',
};
