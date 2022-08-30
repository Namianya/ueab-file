<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table  w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Student Id</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Last Name</th>
            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td class="uppercase">Some id</td>
            <td>Grace</td>
            <td>Kaimburi</td>
            <td>Muthoni</td>
            <td class="text-green-500">Present</td>
            <td class="flex gap-1">
              <button class="btn btn-xs btn-secondary">retrive</button>
              <button class="btn btn-xs btn-success">Return</button>
              <button class="btn btn-xs btn-primary">History</button>
            </td>
          </tr>
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompactTable"
}
</script>

<style scoped>
</style>
