const _getIndexView = (req, res) => {
  const model = {
    user: {
      username: 'lucduong',
      email: 'luc@ltv.vn'
    },
    title: 'HomePage'
  }
  res.render('home', model)
}

const _getContactView = (req, res) => {
  res.render('contact')
}

exports.getIndexView = _getIndexView
exports.getContactView = _getContactView
