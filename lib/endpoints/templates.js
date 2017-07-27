const Base = require('../extends/base');
const constants = require('../constants/');

class Templates extends Base {
  /**
   * Returns a list of all templates.
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.folder_id] folder id
   * @param {number} [searchParams.date_from] Filter by date from. Example: 2016-12-31.
   * @param {number} [searchParams.date_to] Filter by date to. Example: 2017-12-31.
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order_by] order by
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  all(searchParams) {
    return this.request({
      endPoint: constants.TEMPLATES_ENDPOINT,
      qs: searchParams,
    });
  }

  /**
   * Returns a template by id.
   * @param {number} id of template
   * @returns {Promise}
   */
  get(id) {
    return this.request({
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      id: { template_id: id }
    });
  }

  /**
   * Create new template with given data.
   * @param {object} templateInfo for creating new template
   * @param {string | object} templateInfo.file url to file, or file
   * @param {string} templateInfo.name some_name_for_new_template
   * @param {number} templateInfo.folder_id folder id
   * @returns {Promise} with created template information
   */
  create(templateInfo) {
    return this.request({
      endPoint: constants.TEMPLATES_ENDPOINT,
      method: 'POST',
      json: typeof templateInfo.file === 'string',
      formData: templateInfo.file !== 'string',
      data: templateInfo
    });
  }

  /**
   * Update template with given data.
   * @param {number} id id of template
   * @param {object} templateInfo for creating new application
   * @param {string} templateInfo.name some_name_for_new_template
   * @param {number} templateInfo.folder_id folder id
   * @returns {Promise} with created template information
   */
  update(id, templateInfo) {
    return this.request({
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      method: 'PUT',
      json: true,
      data: templateInfo,
      id: { template_id: id }
    });
  }

  /**
   * Download template by id.
   * @param {number} id id of template
   * @returns {Promise} with buffer
   */
  download(id) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ENDPOINT,
      id: { template_id: id },
    });
  }

  /**
   * Retrieves a list of roles for a document template.
   * @param {number} id id of template
   * @returns {Promise}
   */
  roles(id) {
    return this.request({
      endPoint: constants.TEMPLATES_ROLES_ENDPOINT,
      id: { template_id: id }
    });
  }

  /**
   * Download original template by id.
   * @param {number} id id of template
   * @returns {Promise} with buffer
   */
  downloadOriginal(id) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_ORIGINAL_ENDPOINT,
      id: { template_id: id }
    });
  }

  /**
   * Deletes a document template item.
   * @param {number} id id of template
   * @returns {Promise}
   */
  remove(id) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      id: { template_id: id },
    });
  }

  /**
   * Get values for a fillable form.
   * @param {number} id id of template
   * @returns {Promise}
   */
  fields(id) {
    return this.request({
      endPoint: constants.TEMPLATES_FIELDS_ENDPOINT,
      id: { template_id: id }
    });
  }

  /**
   * Retrieves child documents for a selected document template.
   * @param {number} id id of template
   * @param {object} [searchParams] object with params for pagination
   * @param {number} [searchParams.per_page] application on 1 page
   * @param {number} [searchParams.page] page number
   * @param {string} [searchParams.order] order
   * @returns {Promise}
   */
  filled(id, searchParams) {
    return this.request({
      endPoint: constants.TEMPLATES_FILLED_DOCS_ENDPOINT,
      id: { template_id: id },
      qs: searchParams
    });
  }

  /**
   * Retrieves child documents for a selected document template.
   * @param {number} id id of template
   * @returns {Promise}
   */
  downloadSignatures(id) {
    return this.request({
      endPoint: constants.TEMPLATES_DOWNLOAD_SIGNATURES_ENDPOINT,
      id: { template_id: id },
    });
  }

  /**
   * Populates a fillable form template which was created with the PDFfiller editor.
   * @param {number} id id of template
   * @param {object} fillableInfo object with fillable params
   * @param {object} fillableInfo.fillable_fields fields data what will be filled to template
   * @param {number} fillableInfo.folder_id folder id
   * @param {string} fillableInfo.name Name created for a newly filled document
   * @returns {Promise}
   */
  fill(id, fillableInfo) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_BY_ID_ENDPOINT,
      id: { template_id: id },
      json: true,
      data: fillableInfo
    });
  }

  /**
   * Creates a new share link to a document.
   * @param {number} id id of template
   * @param {object} [constructorInfo] object with fillable params
   * @param {number} [constructorInfo.expire Number of days left until link expires. Max value - 1000
   * @param {string} [constructorInfo.callback_url Callback destination url
   * @returns {Promise}
   */
  createConstructor(id, constructorInfo) {
    return this.request({
      method: 'POST',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      id: { template_id: id },
      json: true,
      data: constructorInfo
    });
  }

  /**
   * Retrieves a list of hash.
   * @param {number} id id of template
   * @returns {Promise}
   */
  getConstructor(id) {
    return this.request({
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      id: { template_id: id },
    });
  }

  /**
   * Retrieves a list of hash.
   * @param {number} id id of template
   * @param {string} hash Hash for shared link
   * @returns {Promise}
   */
  removeConstructorByHash(id, hash) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      id: { template_id: id },
      hash
    });
  }

  /**
   * Deletes all share links to a document by id.
   * @param {number} id id of template
   * @returns {Promise}
   */
  removeConstructor(id) {
    return this.request({
      method: 'DELETE',
      endPoint: constants.TEMPLATES_CONSTRUCTOR_ENDPOINT,
      id: { template_id: id },
    });
  }
}

module.exports = Templates;
