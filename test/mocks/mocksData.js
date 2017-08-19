const auth = {
  access_token: 'mockToken',
  refresh_token: 'mockToken',
  expires_in: 86400,
  token_type: 'token'
};

const applications = [
  {
    id: 'fd203a534c31ad20',
    secret: '9MAoB51ooCW8yKAiuyszuNJyN21C9Oui',
    name: 'Custom name',
    description: 'application description',
    domain: 'domain.com',
    logo: 'logo url',
    redirect_uri: 'http://www.domain.com',
    embedded_client: {
      domain: 'domain.com',
      allow_all_domains: true
    }
  }
];

const callbacks = [
  {
    id: 1,
    document_id: 1,
    event_id: 'fill_request.done',
    callback_url: 'http://api.pdffiller.com'
  }
];

const callbacksGlobal = {
  callback_url: 'http://api.pdffiller.com'
};

const customLogos = [
  {
    id: 3083,
    width: 250,
    height: 250,
    filesize: 2488,
    logo_url: 'urlToLogo'
  }
];

const folders = [
  {
    folder_id: 1111,
    name: 'Custom name',
    documents_count: 1,
    folders_count: 0,
    parent_id: 2222
  }
];

const tokens = [
  {
    id: 123,
    hash: 'some_hash_string',
    data: {
      key_1: 'Foo',
      key_2: 'Bar',
      key_3: '12345'
    }
  }
];

const user = {
  id: 123456789,
  email: 'some-email@domain.com',
  avatar: 'urlToAvatarIfExists'
};

const templates = {
  templates: [
    {
      id: 12345678,
      name: 'File_name.extension',
      type: 'docx',
      created: 1457222400,
      updated: 1457222400,
      fillable: false,
      folder: {
        folder_id: 12345678,
        name: 'My_folder'
      }
    }
  ],
  roles: [{
    id: 777,
    document_id: 111,
    role_name: 'Developer',
    order: 0
  }],
  fields: {
    type: 'text',
    name: 'YourCustomFieldName',
    initial: 'default value',
    required: true,
    label: 'Text for user\'s',
    fillable: true,
    maxLines: 2,
    maxChars: 200,
    list: [
      'First Choice',
      'Second Choice'
    ],
    allowCustomText: true,
    radioGroup: 'GroupName',
    format: 'yyyy-M-d',
    value: 'some_value'
  },
  constructor: {
    document_id: 1111111111,
    hash: 'string',
    url: 'some url',
    short_url: 'short link'
  },
  constructorList: {
    items: [
      {
        hash: 'hash_string',
        expiration: '2017-01-01 00:00:00',
        url: 'https://url.com/en/hash_string.htm'
      }
    ],
    callback_urls: [
      'your_custom_or_global_callback_url', 'another_custom_or_global_callback_url'
    ]
  },
  remove: { message: 'removed' }
};

const fillableForms = {
  fillable: [
    {
      fillable_form_id: 123456,
      document_name: 'Document.pdf',
      access: 'full',
      status: 'public',
      email_required: true,
      allow_downloads: false,
      redirect_url: '``',
      name_required: true,
      custom_message: '``',
      filled_forms_count: 3,
      notification_emails: [{ name: 'Username', email: 'some-email@domain.com' }],
      notifications: 'disabled',
      url: '``',
      enforce_required_fields: true,
      custom_logo_id: 1234,
      welcome_screen: false,
      additional_documents: [{ name: 'docs1', files: [{ id: 119031, filename: 'filename.pdf', ip: '109.237.93.134', date_created: '2017-03-10 10:06:33' }] }],
      reusable: true,
      callbacks: [{ id: 1, document_id: 1, event_id: 'fill_request.done', callback_url: 'http://api.pdffiller.com' }],
      signature_stamp: true
    }
  ],
  filled: [
    {
      filled_form_id: 123456,
      document_id: 987654321,
      name: '``',
      email: '``',
      date: 1491983011,
      ip: '255.255.255.255',
      additional_documents: [{ name: 'docs1', files: [{ id: 119031, filename: 'filename.pdf', ip: '109.237.93.134', date_created: '2017-03-10 10:06:33' }] }],
      token: [{ id: 123, hash: 'some_hash_string', data: { key_1: 'Foo', key_2: 'Bar', key_3: '12345' } }],
      reusable_document_id: 12345678,
      signature_stamp: true
    }
  ],
  export: {
    id: '161616',
    email: 'N/A',
    name: 'N/A',
    date: '30/12/1999',
    time: '12:59 pm',
    total_pages: 0,
    status: 'NOT DOWNLOADED',
    pages: [{ number: 1, fillable_fields_num: 5, prefilled_content_num: 0, fillable_fields: [{ name: 'text_1', content: '' }] }]
  },
  additional: [{ name: 'docs1', files: [{ id: 119031, filename: 'filename.pdf', ip: '109.237.93.134', date_created: '2017-03-10 10:06:33' }] }]
};

const signatureRequests = {
  signatureRequest: [{
    signature_request_id: 22969,
    document_id: 20802117,
    document_name: 'file.pdf',
    date_created: 1491491820,
    date_signed: 0,
    method: 'sendtoeach',
    status: 'IN_PROGRESS',
    envelope_name: '``',
    security_pin: 'enhanced',
    sign_in_order: false,
    recipients: []
  }],
  recipients: [{
    id: 57664,
    user_id: 45454545,
    email: 'some-email@domain.com',
    name: 'John Doe',
    status: 'NOT_SENT',
    order: 0,
    ip: '255.255.255.255',
    require_photo: false,
    message_subject: 'some text',
    message_text: 'some text',
    date_created: 1491491820,
    date_signed: 0,
    access: 'full',
    phone_authenticate: '``',
    additional_documents: [],
    roles: [{ id: 57664, name: 'Developers' }],
    callbacks: [{ id: 12345, event_id: 'signature_request.done', callback_url: 'http://apicallbacks.pdffiller.com' }]
  }],
  additional_documents: [{ name: 'docs1', files: [{ id: 119031, filename: 'filename.pdf', ip: '109.237.93.134', date_created: '2017-03-10 10:06:33' }] }]
};

const tools = {
  merge: {
    id: 12345678,
    name: 'PDF_FILE_NAME',
    type: 'pdf',
    status: 'complete',
    created: 1457222400,
    updated: 1457222400,
    folder: {
      id: 12345678,
      name: 'My_folder'
    }
  }
};

module.exports = {
  auth,
  applications,
  callbacks,
  callbacksGlobal,
  customLogos,
  folders,
  tokens,
  user,
  templates,
  fillableForms,
  signatureRequests,
  tools,
};
