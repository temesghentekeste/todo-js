import { addNewProject } from '../event_listners/projectEventListners';

const getProjectModal = () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal fade" id="projectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Project</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="project-name" class="col-form-label">Project:</label>
                  <input type="text" class="form-control" id="project-name">
                </div>
                <div class="form-group">
                  <label for="project-description-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="project-description"></textarea>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" id="add-project">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  // Attach event handler to btn
  modal.querySelector('#add-project').addEventListener('click', addNewProject);
  return modal;
};

export default getProjectModal;
