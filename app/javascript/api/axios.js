import axios from 'axios';

const metaCsrfToken = document.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': metaCsrfToken ? metaCsrfToken.getAttribute('content') : '',
};

const adapter = axios.create({
  baseURL: '/',
});

export default {
  clients: {
    create: (client) => adapter.post('/staffs/clients', { client }),
    index: () => adapter.get('/staffs/clients'),
    validate: (client) => adapter.post('/staffs/clients/validate', { client }),
  },
  staffs: {
    create: (staff) => adapter.post('/staffs/staffs', { staff }),
    index: () => adapter.get('/staffs/staffs'),
    destroy: (id) => adapter.delete(`/staffs/staffs/${id}`),
  },
  organizations: {
    create: (organization) => adapter.post('/staffs/organizations', { organization }),
    index: () => adapter.get('/staffs/organizations'),
    destroy: (id) => adapter.delete(`/staffs/organizations/${id}`),
  },
  hardwares: {
    create: (hardware) => adapter.post('/staffs/hardwares', { hardware }),
    index: () => adapter.get('/staffs/hardwares'),
    destroy: (id) => adapter.delete(`/staffs/hardwares/${id}`),
  },
};
